import React from "react";
import CartWidget from "./CartWidget";
import Account from "./Account";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import {
  Container,
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Circle,
  Center,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Logo from "../assets/logo.png";

const NavBarCopy = () => {
  return (
    <>
      <Flex
        maxW="100%"
        height="4rem"
        align="center"
        // justify="center"
        gap="2"
        bg="#24252a"
      >
        {/* Agrego Logo*/}
        <Heading size="md" marginLeft="20px">
          <Image src={Logo} alt="logo" width="40px" height="30px" />
        </Heading>

        {/* Agrego Brand*/}
        <Heading color="white" size="md">
          Pawsitively
        </Heading>

        {/* Agrego campo de categorías */}
        <Menu>
          <MenuButton
            marginLeft="30px"
            as={Button}
            rightIcon={<ChevronDownIcon />}
            color="white"
            variant="ghost"
            height="2em"
            width="auto"
            _hover={{ variant: "outline", bg: "#4faabf" }}
            _active={{ bg: "#4faabf" }}
          >
            Categorías
          </MenuButton>
          <MenuList>
            <MenuItem minH="48px" color="black">
              <span>Categoría 1</span>
            </MenuItem>
            <MenuItem minH="40px" color="black">
              <span>Categoría 2</span>
            </MenuItem>
          </MenuList>
        </Menu>

        <Flex>
          <Box as="ul" color="white" listStyleType="none">
            <Button
              color="white"
              marginLeft="10px"
              variant="ghost"
              height="2em"
              width="auto"
              padding="auto"
              _hover={{ variant: "outline", bg: "#4faabf" }}
              _active={{ bg: "#4faabf" }}
            >
              Ofertas
            </Button>
            <Button
              marginLeft="15px"
              color="white"
              variant="ghost"
              height="2em"
              width="auto"
              padding="auto"
              _hover={{ variant: "outline", bg: "#4faabf" }}
              _active={{ bg: "#4faabf" }}
            >
              Nuevos ingresos
            </Button>
            <Button
              marginLeft="15px"
              color="white"
              variant="ghost"
              height="2em"
              width="auto"
              padding="auto"
              _hover={{ variant: "outline", bg: "#4faabf" }}
              _active={{ bg: "#4faabf" }}
            >
              Blog
            </Button>
          </Box>
        </Flex>

        <Spacer />
        <Box>
        <InputGroup>
          <Input
            placeholder="Buscar Producto..."
            borderRadius="full"
            bg="#f5f7f9"
            variant="filled"
            w="20rem"
            height="auto"
            _focus={{ bg: "gray.200" }}
          />
          <InputRightElement children={<SearchIcon />} />
        </InputGroup>
        </Box>

        {/* Agrego sección de perfil*/}
        <Button
          rounded="11"
          color="white"
          marginLeft="10px"
          // bg="#0088a9"
          variant="ghost"
          variantcolor="#0088a9"
          _hover={{ bg: "#4faabf" }}
          size="md"
          height="2em"
          width="6.5em"
        >
          <Account />
          Account
        </Button>

        {/* Agrego boton de icono de carrito CartWidget */}
        <Button
          rounded="11"
          color="white"
          marginLeft="10px"
          marginRight="20px"
          // bg="#0088a9"
          variant="ghost"
          variantcolor="#0088a9"
          _hover={{ bg: "#4faabf" }}
          size="md"
          height="2em"
          width="5em"
        >
          <CartWidget />
          Cart
        </Button>
      </Flex>
    </>
  );
};

export default NavBarCopy;