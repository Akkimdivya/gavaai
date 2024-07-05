import React from "react";
import { Flex, Image } from "@adobe/react-spectrum";
import logo from "../assets/havahavai.png"; // Adjust the path to your image
import profile from "../assets/girllogo.jpg"; // Adjust the path to your profile image

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      UNSAFE_style={{ padding: "16px", backgroundColor: "#dee2e6" }}
    >
      <Image src={logo} alt="Logo" height="size-300" width="size-1500" />
      <Image
      src={profile}
      alt="Profile"
      height="size-500"
      width="size-600"
      UNSAFE_style={{ borderRadius: "50%" }}
    />
    </Flex>
  );
};

export default Navbar;
