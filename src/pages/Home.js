import { Container, Card, Row, Text } from "@nextui-org/react";

const Home = () => {
    return (
        <div>
            <Container>
                <Card css={{ $$cardColor: '$colors$primary' }}>
                    <Card.Body>
                        <Row justify="center" align="center">
                            <Text h6 size={15} color = "white" css={{ m: 0 }}>
                                Home Page Text
                            </Text>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

        </div>
    );
}
export default Home;