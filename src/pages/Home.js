import { Container, Card, Row, Text } from "@nextui-org/react";
import TeamCard from "../components/Teams/TeamCard";

const Home = () => {
    return (
        <div>
            <Container>
                <Card css={{ $$cardColor: '$colors$primary' }}>
                    <Card.Body>
                        <Row justify="center" align="center">
                            <Text h6 size={15} color = "white" css={{ m: 0 }}>
                                Home Page Placeholder
                            </Text>
                        </Row>
                    </Card.Body>
                </Card>
                <TeamCard title="Team Name" raidTimes="Friday 8:00pm - 10:00pm"/>
            
            </Container>

        </div>
    );
}
export default Home;