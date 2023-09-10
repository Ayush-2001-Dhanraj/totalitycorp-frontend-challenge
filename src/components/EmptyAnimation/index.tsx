import Lottie from "react-lottie";
import loadingAnimation from "../../lotties/notfound.json";

export default function EmptyAnimation() {
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
