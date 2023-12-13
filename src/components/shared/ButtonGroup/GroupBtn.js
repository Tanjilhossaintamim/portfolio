import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import classNames from "classnames";

export default function GroupButton({ activeTab, setActiveTab }) {
  const buttons = [
    <Button
      key="one"
      onClick={() => setActiveTab("All")}
      className={classNames({
        "bg-[#29223F]": activeTab == "All",
        "text-[#854ce6]": true,
      })}
    >
      All
    </Button>,
    <Button
      key="two"
      onClick={() => setActiveTab("FullStack")}
      className={classNames({
        "bg-[#29223F]": activeTab == "FullStack",
        "text-[#854ce6]": true,
      })}
    >
      FullStack
    </Button>,
    <Button
      key="three"
      onClick={() => setActiveTab("Frontend")}
      className={classNames({
        "bg-[#29223F]": activeTab == "Frontend",
        "text-[#854ce6]": true,
      })}
    >
      Frontend
    </Button>,
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
        borderRadius: 10,
      }}
    >
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
