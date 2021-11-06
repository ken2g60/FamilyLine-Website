import { FC } from 'react'
import { useRouter } from 'next/router'
import {
  Box,
  Flex,
  Image
} from "@chakra-ui/react"

const Links = [
    {name: 'Home', path: '/'},
    {name: 'Profile', path: '/profile'},
    {name: 'Blog', path: '/blog'},
    {name: 'Privacy', path: 'privacy'},
    {name: 'Contact', path: '/contact'}
]
const active = {
    bg:'linear-gradient(to top, rgba(0, 191, 77, 1) 0%, rgba(2, 153, 62, 1) 100%)',
    color:'white',
    shadow: '0 1px 6px 0 rgba(245, 155, 90, 0.02), 0 8px 13px 0 rgba(245, 155, 90, 0.03), 0 20px 26px 0 rgba(245, 155, 90, 0.04)'
}
const Nav: FC = () => {
  const router = useRouter()
  return (
    <Box w='full' h={20} bg="transparent" px={16} pos={'absolute'} top={0} zIndex={3}>
        <Flex justifyContent={'space-between'}>
            <Image src={'/images/logo.png'} alt="Family Line Logo" boxSize={20} mt={2} />
            <Flex align="center" ml={20}>
                {Links.map(item => <Box key={item.name} fontWeight={'bold'} fontSize={18} px={8} py={2} rounded={'full'} cursor={'pointer'} {...router.pathname === item.path ? active: ''}>{item.name}</Box>)}
            </Flex>
            <Flex>
                <Box fontWeight={'bold'} fontSize={18} px={4} py={5}>Log In</Box>
                <Box fontWeight={'bold'} fontSize={18} px={4} py={5}>Signup</Box>
            </Flex>
        </Flex>
    </Box>
  )
}

export default Nav
