import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";
import { styled } from "@mui/material/styles";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Icon from "../icon";

const NavButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  "-webkit-tap-highlight-color": theme.palette.primary[500],
  "-webkit-appearance": "none",
  appearance: "none",
  backgroundColor: "transparent",
  touchAction: "manipulation",
  textDecoration: "none",
  cursor: "pointer",
  border: `1px solid ${theme.palette.primary[500]}`,
  padding: 0,
  margin: 0,
  boxShadow: theme.shadows[2],
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  color: theme.palette.primary[500],
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: theme.palette.primary[15]
  },
  "& .prev": {}
}));

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  };
};

export const PrevButton = (props: IconButtonProps) => {
  const { children, ...restProps } = props;

  return (
    <NavButton className="prev" type="button" {...restProps}>
      {children ? children : <Icon icon="tabler:chevron-left" />}
    </NavButton>
  );
};

export const NextButton = (props: IconButtonProps) => {
  const { children, ...restProps } = props;

  return (
    <NavButton className="next" type="button" {...restProps}>
      {children ? children : <Icon icon="tabler:chevron-right" />}
    </NavButton>
  );
};
