import {
    Avatar,
    Button,
    Flex,
    Heading,
    HStack,
    Spacer,
    Text,
    AvatarBadge,
    useToast
} from '@chakra-ui/react';
import {UnlockIcon} from "@chakra-ui/icons";

function Navbar(props) {
    const toast = useToast()
    return (
        <Flex as="nav" mb="40px" p="10px" alignItems="center">
            <Heading as="h1">X Tasks</Heading>
            <Spacer />
            <HStack spacing="20px">
                <Avatar name="X" bg="purple.400" src="/img/mario.png">
                    <AvatarBadge width="1.3em" bg="teal.500">
                        <Text fontSize="xs" color="white">99</Text>
                    </AvatarBadge>
                </Avatar>
                <Text>x@x.gg</Text>
                <Button
                    colorScheme="purple"
                    onClick={() => {
                        toast({
                            title: 'Logged out.',
                            description: "Successfully logged out",
                            duration: 10000,
                            isClosable: true,
                            position: 'top',
                            status: 'success',
                            icon: <UnlockIcon />,
                        })
                    }}
                >Logout</Button>
            </HStack>
        </Flex>
    );
}

export default Navbar;