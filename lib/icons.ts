import {
  ChevronLeftIcon,
  FastForwardIcon,
  HomeIcon,
  type LucideIcon,
  PauseIcon,
  PlayIcon,
  RewindIcon,
  VideoIcon,
  Volume2Icon,
  VolumeXIcon,
} from "lucide-react-native";
import { cssInterop } from "nativewind";

function iconWithClassName(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}

iconWithClassName(ChevronLeftIcon);
export { ChevronLeftIcon };

iconWithClassName(FastForwardIcon);
export { FastForwardIcon };

iconWithClassName(HomeIcon);
export { HomeIcon };

iconWithClassName(PauseIcon);
export { PauseIcon };

iconWithClassName(PlayIcon);
export { PlayIcon };

iconWithClassName(RewindIcon);
export { RewindIcon };

iconWithClassName(VideoIcon);
export { VideoIcon };

iconWithClassName(VolumeXIcon);
export { VolumeXIcon };

iconWithClassName(Volume2Icon);
export { Volume2Icon };
