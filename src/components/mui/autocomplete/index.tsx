import { ElementType, forwardRef } from "react";
import Paper from "@mui/material/Paper";
import Autocomplete, { AutocompleteProps } from "@mui/material/Autocomplete";
import Icon from "@/components/icon";

const CustomAutocomplete = forwardRef(
  <
    T,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined,
    ChipComponent extends ElementType
  >(
    props: AutocompleteProps<
      T,
      Multiple,
      DisableClearable,
      FreeSolo,
      ChipComponent
    >,
    ref: any
  ) => {
    return (
      // eslint-disable-next-line lines-around-comment
      <Autocomplete
        {...props}
        ref={ref}
        popupIcon={<Icon icon="tabler:chevron-down" />}
        PaperComponent={(props) => (
          <Paper {...props} className="custom-autocomplete-paper" />
        )}
      />
    );
  }
) as typeof Autocomplete;

export default CustomAutocomplete;
