import Lottie from "react-lottie";
import loadingAnimation from "../../lotties/loading.json";

export default function LoadingAnimation() {
  const defaultAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultAnimationOptions} height={200} width={200} />;
}
