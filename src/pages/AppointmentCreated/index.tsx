import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();

  const handleOkPressed = useCallback(() => {
    // Depois de ir para o dashboard, nao pode voltar para tras
    // para nao dar para arrastar ou clicar no botao(android) para a tela anterior
    reset({
      routes: [{ name: 'Dashboard' }],
      index: 0,
    });
  }, [reset]);
  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />

      <Title>Agendamento concluído</Title>
      <Description>Terça, dia 14 de março de 2020 às 12:00h</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText> Ok </OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
