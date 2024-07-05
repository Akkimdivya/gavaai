import React from 'react';
import { IoMdHome } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { Flex, View, Text, Heading } from "@adobe/react-spectrum";

const SideBar = () => {
  return (
    <View padding="size-300">
      <Flex direction="column" gap="size-300">
        
        {/* Navigation Links */}
        <Flex direction="column" gap="size-150">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active-link px-1 py-1 rounded" : "hover:bg-slate-200 px-1 py-1 rounded"
            }
          >
            <Flex alignItems="center" gap="size-100">
              <IoMdHome size={24} color="#4A5568" />
              <Text>Home</Text>
            </Flex>
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "active-link px-1 py-1 rounded" : "hover:bg-slate-200 px-1 py-1 rounded"
            }
          >
            <Flex alignItems="center" gap="size-100">
              <RxDashboard size={20} color="#4A5568" />
              <Text>Dashboard</Text>
            </Flex>
          </NavLink>
        </Flex>
        
        {/* Services Section */}
        <Flex direction="column" gap="size-150">
          <Heading level={4} UNSAFE_style={{ fontWeight: "bold", padding: "5px" }}>
            Services
          </Heading>
          <NavLink
            to="/airports"
            className={({ isActive }) =>
              isActive ? "active-link px-1 py-1 rounded" : "hover:bg-slate-200 px-1 py-1 rounded"
            }
          >
            Airports
          </NavLink>
          <NavLink
            to="/videos"
            className={({ isActive }) =>
              isActive ? "active-link px-1 py-1 rounded" : "hover:bg-slate-200 px-1 py-1 rounded"
            }
          >
            Videos
          </NavLink>
        </Flex>
        
        {/* Others Section */}
        <Flex direction="column" gap="size-150">
          <Heading level={4} UNSAFE_style={{ fontWeight: "bold", padding: "5px" }}>
            Others
          </Heading>
          <Text UNSAFE_style={{ padding: "5px" }}>List1</Text>
          <Text UNSAFE_style={{ padding: "5px" }}>List2</Text>
          <Text UNSAFE_style={{ padding: "5px" }}>List3</Text>
        </Flex>
      </Flex>
    </View>
  );
};

export default SideBar;
