import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: italic;

`

const Announcement = () => {
  return (
    <Container>
        From 04.10 Promote Your Ads With 25% Off!
    </Container>
  )
}

export default Announcement