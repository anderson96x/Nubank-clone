import { useRef, useState } from "react";
import { InnerContainer, Container, Text } from "./style";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

const data = [...new Array(3).keys()];
const messages = [
  <>
    Projeto educacional de demonstração desenvolvido por:{" "}
    <Text style={{ fontWeight: "bold" }}>Anderson Lobo.</Text>
  </>,
  <>
    Todas os direitos são reservados ao{" "}
    <Text style={{ fontWeight: "bold" }}>Nubank</Text>
  </>,
  <>
    <Text style={{ fontWeight: "bold" }}>Pix no crédito: </Text>faça pagamentos
    sem usar o saldo da conta.
  </>,
];

function CarouselMessages() {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <Container>
      <Carousel
        width={300}
        height={80}
        data={data}
        onProgressChange={progress}
        renderItem={({ index }) => (
          <InnerContainer>
            <Text>{messages[index]}</Text>
          </InnerContainer>
        )}
      />
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 10 }}
        onPress={onPressPagination}
      />
    </Container>
  );
}

export default CarouselMessages;