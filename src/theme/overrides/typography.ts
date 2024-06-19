import { OwnerStateThemeType } from "./";

const typography = {
  MuiTypography: {
    styleOverrides: {
      gutterBottom: ({ theme }: OwnerStateThemeType) => ({
        marginBottom: theme.spacing(2)
      })
    },
    variants: [
      {
        props: { variant: "display2xl" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: "displayXl" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: "displayLg" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: "displayMd" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: "displaySm" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: "displayXs" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        })
      },

      {
        props: { variant: "text2xl" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: "textXl" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: "textLg" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: "textMd" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.primary
        })
      },
      {
        props: { variant: "textSm" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.secondary
        })
      },
      {
        props: { variant: "textXs" },
        style: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.text.secondary
        })
      },
      {
        props: { variant: "button" },
        style: ({ theme }: OwnerStateThemeType) => ({
          textTransform: "none",
          color: theme.palette.text.primary
        })
      }
    ]
  }
};

export default typography;
