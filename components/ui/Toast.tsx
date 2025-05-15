// components/ui/Toast.tsx
import { Toast as ShadcnToast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, useToast } from '@shadcn/ui'

export const Toast = () => {
  const { toast } = useToast()

  return (
    <ToastProvider>
      <ShadcnToast />
    </ToastProvider>
  )
}

export const useToastNotification = () => {
  const { toast } = useToast()

  const showToast = (message: string) => {
    toast({
      title: 'Повідомлення',
      description: message,
      action: <ToastAction altText="Закрити">Закрити</ToastAction>,
    })
  }

  return { showToast }
}
