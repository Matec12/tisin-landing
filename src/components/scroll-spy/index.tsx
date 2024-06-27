import { useEffect, useState } from "react";
import { Link as ScrollLink, Element, Events } from "react-scroll";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import { GrowIn } from "../animations";

interface ScrollSpyProps {
  sections: { id: string; title: string; details: JSX.Element }[];
}

const Scrollspy = ({ sections }: ScrollSpyProps) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  useEffect(() => {
    Events.scrollEvent.register("begin", function (...rest) {
      console.log("begin", { ...rest });
    });

    Events.scrollEvent.register("end", function (...rest) {
      console.log("end", { ...rest });
    });

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        position: "relative",
        gap: 8
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: { md: "sticky" },
          top: 90,
          transitionProperty: "all",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDuration: "500ms",
          width: { md: "50%", lg: "40%", xl: "30%" },
          height: "100%"
        }}
      >
        <GrowIn>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 8 }}>
            {sections.map((section) => (
              <ScrollLink
                key={section.id}
                to={section.id}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={handleSetActive}
                offset={-90}
              >
                <MuiLink
                  component="button"
                  variant="body2"
                  color={
                    activeSection === section.id
                      ? "primary.light"
                      : "common.black"
                  }
                  sx={{
                    margin: "0 10px",
                    fontWeight: activeSection === section.id ? 600 : 400,
                    fontSize: 16,
                    transitionProperty: "all",
                    transitionTimingFunction: "ease-in",
                    transitionDuration: "300ms"
                  }}
                >
                  {section.title}
                </MuiLink>
              </ScrollLink>
            ))}
          </Box>
        </GrowIn>
      </Box>

      <Box
        sx={{
          position: "relative",
          maxWidth: 800,
          width: { md: "50%", lg: "60%", xl: "70%" }
        }}
      >
        {sections.map((section) => (
          <Element key={section.id} name={section.id} className="element">
            <GrowIn>
              <Box
                sx={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2
                }}
              >
                <Typography
                  variant="textXl"
                  color="common.black"
                  fontWeight={600}
                >
                  {sections.indexOf(section) + 1}. {section.title}
                </Typography>
                <Typography
                  variant="textMd"
                  color="text.primary"
                  sx={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  {section.details}
                </Typography>
              </Box>{" "}
            </GrowIn>
          </Element>
        ))}
      </Box>
    </Box>
  );
};

export default Scrollspy;
