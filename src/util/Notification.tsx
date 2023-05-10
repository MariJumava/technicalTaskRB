import { notifications } from '@mantine/notifications';
import { Check } from '../icons/Check';
import { Circle } from '../icons/Circle';

export const showNotification = (
  success: boolean,
  title: string,
  message: string,
): void =>
  notifications.show({
    title,
    message,
    icon: success ? <Check /> : <Circle />,
    styles: () => ({
      root: {
        backgroundColor: success ? '#58BF3E' : '#FA6055',
        borderRadius: 10,
        boxShadow:
          '0px 2px 4px rgba(0, 0, 0, 0.05), 0px 7px 15px rgba(0, 0, 0, 0.15)',
      },
      title: { color: '#FFFFFF' },
      description: { color: '#FFFFFF' },
      closeButton: {
        color: '#FFFFFF',
        '&:hover': { backgroundColor: 'inherit' },
      },
      icon: { backgroundColor: 'inherit' },
    }),
  });
