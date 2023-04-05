import React from "react";
import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    IconButton,
    Icon,
    HighlightCards
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";

export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{ uri: 'https://scontent-gig2-1.xx.fbcdn.net/v/t39.30808-6/277174376_3058989810979446_5583926012851638550_n.jpg?stp=dst-jpg_s640x640&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=cA2Wywxb_ZoAX-SV-TS&_nc_ht=scontent-gig2-1.xx&oh=00_AfBVGHQSM7Xu7PE3Xkq_Y4TCqgoFw9a8Ykbgfnpr7SF1kQ&oe=6432A238' }} />
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Fabiano</UserName>
                        </User>
                    </UserInfo>
                    <IconButton activeOpacity={0.8}>
                        <Icon name="power" />
                    </IconButton>
                </UserWrapper>
            </Header>
            <HighlightCards>
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </HighlightCards>
        </Container>
    )
}
