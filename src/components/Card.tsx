import { Card as ThemeCard, CardProps as DefaultCardProps } from 'react-native-paper';

type OutlinedCardProps = {
  mode: 'outlined';
  elevation?: never;
};

type ElevatedCardProps = {
  mode?: 'elevated';
  elevation?: number;
};

type ContainedCardProps = {
  mode?: 'contained';
  elevation?: never;
};

type CardProps = (OutlinedCardProps | ElevatedCardProps | ContainedCardProps) & DefaultCardProps;
const Card = (props: CardProps) => (
  <ThemeCard
    className="my-2 mx-4 rounded-md bg-white"
    {...props}
  />
);

export default Card;
