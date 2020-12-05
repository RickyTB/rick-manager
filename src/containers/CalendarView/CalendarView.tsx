import { Box, Text, Grid, VStack, Code, Link } from '@chakra-ui/react'
import { Logo } from '../../Logo'

export default function CalendarView() {
  return (
    <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={3}>
      <VStack spacing={8}>
        <Logo h="40vmin" pointerEvents="none" />
        <Text>
          Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
        </Text>
        <Link
          color="teal.500"
          href="https://chakra-ui.com"
          fontSize="2xl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Chakra
        </Link>
      </VStack>
    </Grid>
  </Box>
  )
}
