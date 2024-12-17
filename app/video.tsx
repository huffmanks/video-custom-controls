import { useEvent } from "expo";
import { router } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "expo-status-bar";
import { VideoView, useVideoPlayer } from "expo-video";
import { useEffect, useRef, useState } from "react";
import { View } from "react-native";

import Slider from "@react-native-community/slider";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  ChevronLeftIcon,
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  RewindIcon,
  Volume2Icon,
  VolumeXIcon,
} from "@/lib/icons";
import { secondsToMMSS } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const videoSource =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export default function TabOneScreen() {
  const [time, setTime] = useState<string | null>("00:00");
  const [progress, setProgress] = useState(0);

  const videoRef = useRef<VideoView | null>(null);
  const insets = useSafeAreaInsets();

  const player = useVideoPlayer(videoSource, (player) => {
    // player.loop = true;
    // player.play();
  });

  const { isPlaying } = useEvent(player, "playingChange", { isPlaying: player.playing });
  const { muted } = useEvent(player, "mutedChange", { muted: player.muted });

  useEffect(() => {
    const enableOrientation = async () => {
      await ScreenOrientation.unlockAsync();
    };

    const disableOrientation = async () => {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
    };

    enableOrientation();

    return () => {
      disableOrientation();
    };
  }, []);

  const onSliderValueChange = (value: number) => {
    const duration = player.duration;
    const currentTime = player.currentTime;

    const newTime = value * duration;
    const timeToSeek = newTime - currentTime;

    player.seekBy(timeToSeek);
    setProgress(value);
    setTime(secondsToMMSS(newTime));
  };

  return (
    <View
      className="relative flex-1 border border-red-500"
      style={{ marginTop: 8, marginBottom: insets.bottom }}>
      <StatusBar hidden />
      <VideoView
        ref={videoRef}
        style={{ width: "100%", height: "100%" }}
        player={player}
        allowsFullscreen={false}
        allowsPictureInPicture
        nativeControls={false}
      />
      <View className="absolute inset-0 flex-1 bg-black/70 p-4">
        <View className="flex-1 justify-between gap-4">
          <View className="flex-row items-center justify-between gap-4">
            <Button
              variant="ghost"
              size="icon"
              onPress={() => router.push("/")}>
              <ChevronLeftIcon
                className="text-foreground"
                size={32}
                strokeWidth={1.25}
              />
            </Button>
          </View>
          <View className="flex-row items-center justify-center gap-8">
            <Button
              variant="ghost"
              size="icon"
              onPress={() => player.seekBy(-5)}>
              <RewindIcon
                className="fill-foreground"
                size={32}
                strokeWidth={1.25}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onPress={() => (isPlaying ? player.pause() : player.play())}>
              {isPlaying ? (
                <PauseIcon
                  className="fill-foreground"
                  size={32}
                  strokeWidth={1.25}
                />
              ) : (
                <PlayIcon
                  className="fill-foreground"
                  size={32}
                  strokeWidth={1.25}
                />
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onPress={() => player.seekBy(5)}>
              <FastForwardIcon
                className="fill-foreground"
                size={32}
                strokeWidth={1.25}
              />
            </Button>
          </View>
          <View className="gap-6">
            <View className="flex-row items-center justify-between gap-4">
              <Text className="text-sm text-foreground/70">{time}</Text>
              <Button
                variant="ghost"
                size="icon"
                onPress={() => (player.muted = !muted)}>
                {muted ? (
                  <VolumeXIcon
                    className="text-foreground/70"
                    size={24}
                    strokeWidth={1.25}
                  />
                ) : (
                  <Volume2Icon
                    className="text-foreground"
                    size={24}
                    strokeWidth={1.25}
                  />
                )}
              </Button>
            </View>

            <View>
              <Slider
                className="h-10 w-full bg-secondary"
                value={progress}
                minimumTrackTintColor="#f8fafc"
                maximumTrackTintColor="#1f242b"
                tapToSeek
                onValueChange={onSliderValueChange}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
