import { OwnerStateThemeType } from "./";

const Card = () => {
  return {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          border: `1px solid ${theme.palette.grey[200]}`,
          "& .card-more-options": {
            marginTop: theme.spacing(-1),
            marginRight: theme.spacing(-3)
          },
          "& .MuiTableContainer-root, & .MuiDataGrid-root, & .MuiDataGrid-columnHeaders":
            {
              borderRadius: 0
            }
        })
      },
      defaultProps: {
        elevation: 0
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          padding: theme.spacing(4),
          borderBottom: `1px solid ${theme.palette.grey[200]}`,
          "& + .MuiCardContent-root, & + .MuiCardActions-root, & + .MuiCollapse-root .MuiCardContent-root":
            {
              paddingTop: theme.spacing(4)
            },
          "& .MuiCardHeader-subheader": {
            marginTop: theme.spacing(0.5),
            color: theme.palette.text.disabled,
            fontSize: theme.typography.body2.fontSize,
            lineHeight: theme.typography.body2.lineHeight
          }
        }),
        title: ({ theme }: OwnerStateThemeType) => ({
          color: theme.palette.grey[800],
          fontWeight: 500,
          lineHeight: 1.334,
          letterSpacing: "0.15px",
          fontSize: "18px"
        }),
        action: {
          marginTop: 0,
          marginRight: 0
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          padding: theme.spacing(4),
          "& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root":
            {
              paddingTop: theme.spacing(4)
            },
          "&:last-of-type": {
            paddingBottom: theme.spacing(4)
          }
        })
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: ({ theme }: OwnerStateThemeType) => ({
          padding: theme.spacing(2, 4),
          "& .MuiButton-text": {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3)
          },
          "&.card-action-dense": {
            padding: theme.spacing(0, 3, 3),
            ".MuiCard-root .MuiCardMedia-root + &": {
              paddingTop: theme.spacing(3)
            }
          },
          ".MuiCard-root &:first-of-type": {
            paddingTop: theme.spacing(3),
            "& + .MuiCardHeader-root, & + .MuiCardContent-root, & + .MuiCardActions-root":
              {
                paddingTop: theme.spacing(4)
              }
          }
        })
      }
    }
  };
};

export default Card;
