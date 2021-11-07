import { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Box, ChakraProvider } from '@chakra-ui/react'
import '../public/fonts/fonts.css'

import Footer from '@components/Footer'
import Nav from '@components/Nav'
import MobileNav from '@components/Nav/MobileNav'
// import configs from 'utils/getConfig'
import { theme } from 'theme/theme'

import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  Component: any
  pageProps: any
}

const MyApp : FC<Props> = ({ Component, pageProps }) => {
  const router = useRouter()
  const noNavPages = ['/payment']
  const noFooterPages = ['/404', '/payment']

  const showNav = !noNavPages.includes(router.pathname)
  const showFooter = !noFooterPages.includes(router.pathname)
  const [OpenMobileNav, setOpenMobileNav] =  useState(false)

  return (
      <ChakraProvider theme={theme} resetCSS>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={router.route}
            initial='pageInitial'
            animate='pageAnimate'
            variants={{
              pageInitial: {
                opacity: 0
              },
              pageAnimate: {
                opacity: 1,
                transition: { duration: 0.5 }
              }
            }}
          >
            <Box fontFamily='Montserrat' pos='relative' {...OpenMobileNav ? {h: '100vh', maxH:'100vh', overflow:'hidden'}: ''}>
              {showNav && <Nav setOpenMobileNav={setOpenMobileNav} />}
             { OpenMobileNav && <MobileNav setOpenMobileNav={setOpenMobileNav} />}
              <Box>
                <Component {...pageProps}/>
              </Box>

              {showFooter && <Footer />}
            </Box>
          </motion.div>
        </AnimatePresence>
      </ChakraProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
}

export default MyApp
