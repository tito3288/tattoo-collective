import React from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { motion } from "framer-motion";

const Popups = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        cursor: "pointer",
        zIndex: "1000",
      }}
    >
      <OverlayTrigger
        trigger="click"
        key="top"
        placement="top"
        overlay={
          <Popover id={`popover-positioned-top`}>
            {/* <Popover.Header as="h3">Header</Popover.Header> */}
            <Popover.Body style={{ textAlign: "center", fontSize: "17px" }}>
              Do you have questions? Call or text today, we are here to help!{" "}
              <br />
              <span style={{ fontWeight: "bold" }}>📞 219-379-6824</span>
            </Popover.Body>
          </Popover>
        }
      >
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor: "#d6bc6e",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <LocalPhoneIcon
            style={{
              fontSize: "2.8rem",
              color: "black",
            }}
          />
        </motion.div>
      </OverlayTrigger>
    </div>
  );
};

export default Popups;
