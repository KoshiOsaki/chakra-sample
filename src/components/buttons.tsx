import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

export const AccentButton: FC<ButtonProps> = (props) => {
  return <Button bg="red" color="white" rounded="full" {...props} />;
};

interface TableButtonProps extends ButtonProps {
  buttonType?: 'delete' | 'cancel' | 'save';
}

export const TableButton = (props: TableButtonProps) => {
  switch (props.buttonType) {
    case 'delete':
      return <Button bg="red" color="white" rounded="full" {...props} />;
    case 'cancel':
      return <Button bg="blue" color="white" rounded="full" {...props} />;
    case 'save':
      return <Button bg="green" color="white" rounded="full" {...props} />;
    default:
      return <Button bg="gray" color="white" rounded="full" {...props} />;
  }
};
