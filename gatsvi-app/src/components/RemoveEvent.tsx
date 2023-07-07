import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { useState } from "react";
import { Items } from "../App";

interface Props {
  getComponents: Items[];
  setgetComponents: React.Dispatch<React.SetStateAction<Items[]>>;
}

export default function RemoveEvent({
  getComponents,
  setgetComponents,
}: Props) {
  const [checked, setChecked] = useState<string[]>([]);

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
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
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
      <Button sx={{ marginTop: "10px" }} onClick={deleteEvents}>
        Confirm Cancel
      </Button>
    </>
  );
}
