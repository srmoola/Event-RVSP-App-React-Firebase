import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import CancelIcon from "@mui/icons-material/Cancel";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Items } from "../App";

interface Props {
  getComponents: Items[];
  setgetComponents: React.Dispatch<React.SetStateAction<Items[]>>;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CancelOverlay({
  getComponents,
  setgetComponents,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = useState<string[]>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (value: string) => () => {
    if (checked.includes(value)) {
      // Remove the item from the checked list
      setChecked(checked.filter((item) => item !== value));
    } else {
      // Add the item to the checked list
      setChecked((prevChecked) => [...prevChecked, value]);
    }
  };

  const deleteEvents = () => {
    setgetComponents((prevComponents) =>
      prevComponents.filter(
        (component) => component.id && !checked.includes(component.id)
      )
    );
  };

  return (
    <div>
      <Button
        fullWidth
        sx={{ marginTop: "10px", height: "100px" }}
        variant="outlined"
        onClick={handleClickOpen}
        color="error"
      >
        <CancelIcon fontSize="large" />
        <Typography fontSize="large"> Cancel Events</Typography>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Cancel Events Menu
            </Typography>
            <Button autoFocus color="inherit" onClick={deleteEvents}>
              Confirm Cancel
            </Button>
          </Toolbar>
        </AppBar>
        <List
          sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}
        >
          {getComponents.map((value) => {
            const labelId = `checkbox-list-label-${value.name}`;
            const itemId = value.id || ""; // Use an empty string as a fallback if value.id is undefined

            return (
              <ListItem
                key={itemId}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments"></IconButton>
                }
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(itemId)}
                  dense
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.includes(itemId)}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={`${value.name}`} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Dialog>
    </div>
  );
}