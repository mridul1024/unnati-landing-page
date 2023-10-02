import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Fade, Fab, Tooltip, Box } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

type FabProps = {
  children: JSX.Element;
};

type ScrollToTopProps = {
  children: JSX.Element;
};

const FabButton = (props: FabProps) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    target: window as any,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 36,
          right: 20,
        }}
      >
        {children}
      </Box>
    </Fade>
  );
};

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  return (
    <>
      <div id="back-to-top-anchor"></div>
      {children}
      <FabButton>
        <Tooltip
          placement="top"
          TransitionComponent={Fade}
          title="Scroll to top"
        >
          <Fab
            size="small"
            // color="primary"
            sx={{
              background: "white",

              "&:hover": {
                // background: "rgb(58,180,233, 0.8)",
                // color: "primary.main",
                backgroundColor: "white",
                // transform: "scale(1.4)",
                // transition: "all 0.2s ease-out",
              },
            }}
            aria-label="scroll back to top"
          >
            <KeyboardArrowUp />
          </Fab>
        </Tooltip>
      </FabButton>
    </>
  );
};

export default ScrollToTop;
