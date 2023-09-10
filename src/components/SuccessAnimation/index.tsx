import { Modal, Box } from "@mui/material";
import { styled } from "@mui/system";
import Lottie from "react-lottie";
import loadingAnimation from "../../lotties/done.json";

const StyledContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400",
  maxWidth: "75%",
});

interface SuccessAnimationInterface {
  isOpen: boolean;
  handleClose: () => void;
}

export default function SuccessAnimation({
  isOpen,
  handleClose,
}: SuccessAnimationInterface) {
  const defaultAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="success-animation-modal"
      aria-describedby="success-modal-after-order-complete"
    >
      <StyledContainer>
        <Lottie options={defaultAnimationOptions} height={200} width={200} />
      </StyledContainer>
    </Modal>
  );
}
