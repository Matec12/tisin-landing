import { forwardRef, useState } from "react";
import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Icon from "@/components/icon";

const TextFieldStyled = styled(TextField)<TextFieldProps>(({ theme }) => ({
  alignItems: "flex-start",
  "& .MuiInputLabel-root": {
    transform: "none",
    lineHeight: 1.154,
    position: "relative",
    marginBottom: theme.spacing(1.5),
    fontSize: "14px",
    fontWeight: 500,
    color: `${theme.palette.grey[700]} !important`
  },
  "& .MuiInputBase-root": {
    borderRadius: 8,
    backgroundColor: `${theme.palette.common.white} !important`,
    border: `1px solid ${theme.palette.grey[300]}`,
    transition: theme.transitions.create(
      ["background-color", "box-shadow", "border-color", "color", "transform"],
      { duration: theme.transitions.duration.shortest }
    ),
    "&:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error):hover": {
      borderColor: `${theme.palette.grey[300]}`
    },
    "&:before, &:after": {
      display: "none"
    },
    "&.MuiInputBase-sizeSmall": {
      borderRadius: 8
    },
    "&.Mui-error": {
      borderColor: theme.palette.error.main
    },
    "&.Mui-focused": {
      "& .MuiInputBase-input:not(.MuiInputBase-readOnly):not([readonly])::placeholder":
        {
          transform: "translateX(4px)",
          fontSize: "16px"
        },
      "&.MuiInputBase-colorPrimary": {
        borderColor: theme.palette.primary[300],
        boxShadow: `0px 0px 0px 4px ${theme.palette.primary[15]}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
      },
      "&.MuiInputBase-colorSecondary": {
        borderColor: theme.palette.secondary[300],
        boxShadow: `0px 0px 0px 4px ${theme.palette.secondary[100]}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
      },
      "&.MuiInputBase-colorTertiary": {
        borderColor: theme.palette.tertiary[300],
        boxShadow: `0px 0px 0px 4px ${theme.palette.tertiary[100]}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
      },
      "&.MuiInputBase-colorSuccess": {
        borderColor: theme.palette.success[300],
        boxShadow: `0px 0px 0px 4px ${theme.palette.success[100]}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
      },
      "&.MuiInputBase-colorWarning": {
        borderColor: theme.palette.warning[300],
        boxShadow: `0px 0px 0px 4px ${theme.palette.warning[100]}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
      },
      "&.MuiInputBase-colorError": {
        borderColor: theme.palette.error[300],
        boxShadow: `0px 0px 0px 4px ${theme.palette.error[100]}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
      },
      "&.Mui-error": {
        borderColor: theme.palette.error[300],
        boxShadow: `0px 0px 0px 4px ${theme.palette.error[100]}, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)`
      }
    },
    "&.Mui-disabled": {
      backgroundColor: `${theme.palette.action.selected} !important`
    },
    "& .MuiInputAdornment-root": {
      marginTop: "0 !important"
    }
  },
  "& .MuiInputBase-input": {
    color: theme.palette.text.primary,
    fontSize: "16px",
    "&:not(textarea)": {
      padding: "10px 14px"
    },
    "&:not(textarea).MuiInputBase-inputSizeSmall": {
      padding: "8px 14px"
    },
    "&:not(.MuiInputBase-readOnly):not([readonly])::placeholder": {
      transition: theme.transitions.create(["opacity", "transform"], {
        duration: theme.transitions.duration.shorter
      })
    },

    // ** For Autocomplete
    "&.MuiInputBase-inputAdornedStart:not(.MuiAutocomplete-input)": {
      paddingLeft: 0
    },
    "&.MuiInputBase-inputAdornedEnd:not(.MuiAutocomplete-input)": {
      paddingRight: 0
    }
  },
  "& .MuiFormHelperText-root": {
    lineHeight: 1.154,
    margin: theme.spacing(1, 0, 0),
    color: theme.palette.text.secondary,
    fontSize: theme.typography.body2.fontSize,
    "&.Mui-error": {
      color: theme.palette.error.main
    }
  },

  // ** For Select
  "& .MuiSelect-select:focus, & .MuiNativeSelect-select:focus": {
    backgroundColor: "transparent"
  },
  "& .MuiSelect-filled .MuiChip-root": {
    height: 22
  },

  // ** For Autocomplete
  "& .MuiAutocomplete-input": {
    paddingLeft: "6px !important",
    paddingTop: "7.5px !important",
    paddingBottom: "7.5px !important",
    "&.MuiInputBase-inputSizeSmall": {
      paddingLeft: "6px !important",
      paddingTop: "2.5px !important",
      paddingBottom: "2.5px !important"
    }
  },
  "& .MuiAutocomplete-inputRoot": {
    paddingTop: "8px !important",
    paddingLeft: "8px !important",
    paddingBottom: "8px !important",
    "&:not(.MuiInputBase-sizeSmall).MuiInputBase-adornedStart": {
      paddingLeft: "14px !important"
    },
    "&.MuiInputBase-sizeSmall": {
      paddingTop: "7px !important",
      paddingLeft: "5px !important",
      paddingBottom: "7px !important",
      "& .MuiAutocomplete-tag": {
        margin: 2,
        height: 22
      }
    }
  },

  // ** For Textarea
  "& .MuiInputBase-multiline": {
    padding: "15.25px 14px",
    "&.MuiInputBase-sizeSmall": {
      padding: "7.25px 14px"
    },
    "& textarea.MuiInputBase-inputSizeSmall:placeholder-shown": {
      overflowX: "hidden"
    }
  },

  // ** For Date Picker
  "& + .react-datepicker__close-icon": {
    // top: 11,
    "&:after": {
      fontSize: "1.6rem !important"
    }
  }
}));

const CustomTextField = forwardRef((props: TextFieldProps, ref) => {
  const {
    size = "small",
    type = "text",
    InputLabelProps,
    InputProps,
    SelectProps,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextFieldStyled
      size={size}
      inputRef={ref}
      type={showPassword ? "text" : type}
      variant="filled"
      InputLabelProps={{ ...InputLabelProps, shrink: true }}
      InputProps={{
        ...(type === "password"
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? (
                      <Icon icon="tabler:eye-off" />
                    ) : (
                      <Icon icon="tabler:eye" />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }
          : InputProps)
      }}
      SelectProps={{
        IconComponent: () => (
          <Box
            sx={{
              mr: 2,
              color: "grey.500",
              svg: {
                width: 16
              }
            }}
          >
            <Icon icon="tabler:chevron-down" />
          </Box>
        ),
        MenuProps: {
          sx: {
            mt: 2,
            border: (theme) => `1px solid ${theme.palette.grey[200]}`,
            boxShadow:
              " 0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)"
          }
        },
        ...SelectProps
      }}
      {...rest}
    />
  );
});

export default CustomTextField;
