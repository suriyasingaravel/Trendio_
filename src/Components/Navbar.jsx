
import React, { ReactNode, useEffect, useState } from "react"

import {
  Box,
  Flex,
  IconButton,
  HStack,
  Image,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react"

import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import { Link } from "react-router-dom"

const links = [
  { text: "MEN", path: "/men" },
  { text: "WOMEN", path: "/women" },
  { text: "ACCESSORIES", path: "/accessories" },
  { text: "ABOUT", path: "/about" },
]

const NavLink = ({ to, children }) => (
  <Box
    as={Link}
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: "none",
      color: useColorModeValue("blue.500", "blue.600"),
    }}
    to={to}
  >
    {children}
  </Box>
)

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure()
  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(
      localStorage.getItem("token") ? localStorage.getItem("token") : null
    )
    console.log(token)
  }, [])

  return (
    <Box zIndex="10" bg="white" color="black" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <MenuIcon />}
          aria-label="Open Menu"
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
        />
        <HStack alignItems="center">
          <Link to="/">
            <Image
              width={130}
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yesn3i1u9al31fgqrulk.png"
              alt="Logo"
            />
          </Link>
        </HStack>
        
        <HStack
          as="nav"
          spacing={4}
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          {links.map(({ text, path }) => (
            <NavLink to={path} key={path}>
              {text}
            </NavLink>
          ))}
        </HStack>
        <HStack spacing={4}>
          <Link to={token ? "/profile" : "/login"}>
            <PersonOutlineOutlinedIcon />
          </Link>
          <Link to="/wishlist">
            <FavoriteBorderOutlinedIcon />
          </Link>
          <Link to="/cart">
            <ShoppingCartOutlinedIcon />
          </Link>
        </HStack>
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ base: "block", md: "none" }}>
          <HStack
            as="nav"
            spacing={4}
            alignItems="center"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {links.map(({ text, path }) => (
              <NavLink to={path} key={path}>
                {text}
              </NavLink>
            ))}
          </HStack>
        </Box>
      )}
    </Box>
  );
}
