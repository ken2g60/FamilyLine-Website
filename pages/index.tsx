import type { NextPage } from 'next'
import {
  Box,
  Grid,
  Flex,
  Text,
  Icon,
  Image,
  Button,
  GridItem
} from '@chakra-ui/react'
import {BsGlobe, BsFillPlayFill} from 'react-icons/bs'
import {Shield, Cloud, Mobile} from 'theme/Icons'

const Home: NextPage = () => {
  return (
    <Box>
      <Box pos="relative">
        <Image src={'./images/banner.png'} alt={'banner-image'} />
        <Box pos='relative' w="full" top={-56}>
          <Grid templateColumns='repeat(7, 1fr)' gap={1}  mx="auto"  w="90%" h={64}>
            <Box as={GridItem} 
              w='full' 
              bg='white' 
              colSpan={3} 
              p={12}
              rounded={'3xl'} 
              shadow="0 4px 100px rgba(0, 0, 0, 0.15)">

              <Text lineHeight={1.3}
                fontWeight='bold' 
                fontSize={40}>The {' '}
                <Text as="span" color="#00BF4D">Evolution</Text> of <br /> Family And 
                {' '}<Text as="span" color="#00BF4D">Lineage</Text> Tracking Is Here</Text>
              <Text mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur. </Text>
            
              <Button 
                rounded={'xl'}
                py={6}
                px={12}
                bg={'linear-gradient(to top, rgba(0, 191, 77, 1) 0%, rgba(2, 153, 62, 1) 100%)'} 
                mt={4} 
                leftIcon={<Icon as={BsGlobe} />} 
                color="white" 
                _hover={{bg: 'linear-gradient(to top, rgba(0, 191, 77, 1) 0%, rgba(2, 153, 62, 1) 100%)'}}
                >Explore</Button>
            </Box>
          </Grid>
        </Box>
      </Box>
      <Grid templateColumns='repeat(3, 1fr)' gap={4} mt={3} mb={8} w={"85%"} mx={'auto'}>
        <Box as={GridItem}mb={8}>
          <Box w={'full'} rounded="xl" maxH={60} h={60} overflow="hidden" mb={1}>
            <Image src={'./images/Community-pana 1.png'} alt="community" h={'100%'}  />
          </Box>
          <Text fontWeight={'bold'} px={5} fontSize={20}>Access your family lineage wherever you are with ease </Text>
          <Text px={5} mt={4} color={"#00BF4D"} fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.</Text>
        </Box>
        <Box as={GridItem}mb={8}>
          <Box w={'full'} rounded="xl" maxH={60} h={60} overflow="hidden" mb={1}>
            <Image src={'./images/People celebrating Thanksgiving-pana 1.png'} alt="community"  h={'100%'}/>
          </Box>
          <Text fontWeight={'bold'} px={5} fontSize={20}>Save and record memorable family events for future reference</Text>
          <Text px={5} mt={4} color={"#00BF4D"} fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.</Text>
        </Box>
        <Box as={GridItem}mb={8}>
          <Box w={'full'} rounded="xl" maxH={60} h={60} overflow="hidden" mb={1}>
            <Image src={'./images/Questions-amico 1.png'} alt="community"  h={'100%'} mx={'auto'} />
          </Box>
          <Text fontWeight={'bold'} px={5} fontSize={20}>Looking for a lost family member? this is the best place to search</Text>
          <Text px={5} mt={4} color={"#00BF4D"} fontWeight={500}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.</Text>
        </Box>
      </Grid>
      <Grid templateColumns='repeat(9, 1fr)' gap={6} mt={12} mb={12} w={"85%"} mx={'auto'}>
        <Box as={GridItem} colSpan={2}>
          <Text fontSize={26} fontWeight={"bold"}>Join the <br /> community of <br />happy Families</Text>
          <Text 
            color={"rgba(0, 191, 77, 1)"} 
            fontSize={14} 
            mt={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur. </Text>
          <Button 
                rounded={'xl'}
                py={6}
                px={12}
                bg={'linear-gradient(to top, rgba(0, 191, 77, 1) 0%, rgba(2, 153, 62, 1) 100%)'} 
                mt={4} 
                leftIcon={<Icon as={BsFillPlayFill} />} 
                color="white" 
                _hover={{bg: 'linear-gradient(to top, rgba(0, 191, 77, 1) 0%, rgba(2, 153, 62, 1) 100%)'}}
                >Start</Button>
        </Box>
        <Box as={GridItem} colSpan={2} colStart={4}>
            <Box h={96} bg={'gray.300'} rounded="2xl" overflow="hidden">
              <Flex align={'center'} justify="center" pos={'relative'}>
                <Image src={"./images/gettyimages-1096158132-612x612 1.png"} alt={"family"} />
                <Icon as={BsFillPlayFill} boxSize={24} pos={"absolute"} color={'white'} />
              </Flex>
            </Box>
            <Text textAlign={'center'} mt={4} fontSize={18} fontWeight={'bold'}>Adams Family</Text>
            <Text textAlign={'center'} mt={2} fontSize={15} color={' rgba(0, 191, 77, 1)'}>Belgium</Text>
        </Box>
        <Box as={GridItem} colSpan={2} >
          <Box  h={96} bg={'gray.300'} rounded="2xl" overflow="hidden">
            <Flex align={'center'} justify="center" pos={'relative'}>
              <Image src={"./images/gettyimages-1150062734-612x612 1.png"} alt={"family"} />
              <Icon as={BsFillPlayFill} boxSize={24} pos={"absolute"} color={'white'} />
            </Flex>
          </Box>
          <Text textAlign={'center'} mt={4} fontSize={18} fontWeight={'bold'}>Mensah Family</Text>
          <Text textAlign={'center'} mt={2} fontSize={15} color={' rgba(0, 191, 77, 1)'}>Accra Ghana</Text>
        </Box>
        <Box as={GridItem} colSpan={2} >
          <Box  h={96} bg={'gray.300'} rounded="2xl" overflow="hidden">
            <Flex align={'center'} justify="center" pos={'relative'}>
              <Image src={"./images/gettyimages-881722918-612x612 1.png"} alt={"family"} />
              <Icon as={BsFillPlayFill} boxSize={24} pos={"absolute"} color={'white'} />
            </Flex>
          </Box>
          <Text textAlign={'center'} mt={4} fontSize={18} fontWeight={'bold'}>Pedro Family</Text>
          <Text textAlign={'center'} mt={2} fontSize={15} color={' rgba(0, 191, 77, 1)'}>Mexico</Text>
        </Box>
      </Grid>
      <Box  w={"85%"} mx={'auto'}>
        <Text fontSize={32} fontWeight="bold">Our Advantages</Text>
        <Grid templateColumns='repeat(9, 1fr)' gap={6} mt={12} mb={12}>
          <Box as={GridItem} colSpan={3} p={6} >
            <Flex my={6}><Icon as={Shield} boxSize={20} mx={'auto'}/></Flex>
            <Text fontWeight={'bold'} fontSize={20}>Secured Platform To Keep Family Data</Text>
            <Text fontSize={14} mt={4} color={' rgba(0, 191, 77, 1)'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur. </Text>
          </Box>
          <Box as={GridItem} colSpan={3} p={6} >
            <Flex my={6}><Icon as={Cloud} boxSize={20} mx={'auto'}/></Flex>
            <Text fontWeight={'bold'} fontSize={20}>Cloud Storage syncing so your family data cannot be lost</Text>
            <Text fontSize={14} mt={4} color={' rgba(0, 191, 77, 1)'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur. </Text>
          </Box>
          <Box as={GridItem} colSpan={3} p={6} >
            <Flex my={6}><Icon as={Mobile} boxSize={20} mx={'auto'}/></Flex>
            <Text fontWeight={'bold'} fontSize={20}>Access your family data anywhere in the world at anytime</Text>
            <Text fontSize={14} mt={4} color={' rgba(0, 191, 77, 1)'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur. </Text>
          </Box>
        </Grid>
      </Box>
      <Box>
        <Text textTransform="uppercase" textAlign="center"  color={' rgba(0, 191, 77, 1)'}>NEWSLETTER</Text>
        <Text as="h4" fontSize={26} fontWeight={'bold'} textAlign="center" mt={4}>Submit For Updates</Text>
        <Text fontSize={15} mt={3} mx="auto" textAlign="center" w={'40%'} lineHeight={1.4}>Get a variety of interesting news updates about family and lineage that can add to your reference and reach for the future</Text>
        <Box mb={8} mt={4} w={'50%'} mx='auto'>
          <Flex align={'center'} justify='center'>
            <Box borderWidth={2} borderColor={'rgba(0, 191, 77, 1)'} rounded={'xl'} mr={4} h={12} mt={0} w="full" px={4} py={3} fontSize={13}>Email Address...</Box>
            <Button  
              px={10}
              py={6}
              bg='linear-gradient(to top, rgba(0, 191, 77, 1) 0%, rgba(2, 153, 62, 1) 100%)'
              color='white'
              shadow='0 1px 6px 0 rgba(245, 155, 90, 0.02), 0 8px 13px 0 rgba(245, 155, 90, 0.03), 0 20px 26px 0 rgba(245, 155, 90, 0.04)'>Submit</Button>
          </Flex>
          <Text fontSize={12} color='gray.400'>We’ll never share your emaill with anyone else.</Text>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
