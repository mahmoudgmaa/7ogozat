import { useEffect, useCallback, useRef } from "react";
import { useSpring, animated } from "react-spring";
import {
  Background,
  Button,
  ModalContent,
  ModalTitle,
  ModalWrapper,
  CloseModalButton,
} from "./styles";

const ModalCancel = ({
  showModal,
  setShowModal,
  header,
  body,
  buttonText,
}: any) => {
  const animation = useSpring({
    config: {
      duration: 100,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const ModalRef = useRef(null);
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  const handleClick = (e: any) => {
    if (ModalRef.current === e.target) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, []);

  const handleClickButton = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal ? (
        <Background ref={ModalRef} onClick={handleClick}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalTitle>
                <h4>{header}</h4>
                <CloseModalButton
                  onClick={() => setShowModal((prev: any) => !prev)}
                />
              </ModalTitle>
              <ModalContent>
                <p
                  style={{
                    fontSize: "1.2rem",
                  }}
                >
                  {body}
                </p>
                <Button onClick={handleClickButton}>{buttonText}</Button>
              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};
export default ModalCancel;
