import { close } from 'ionicons/icons'

export const toast = async (
  message: string,
  duration: number = 3000,
  color: string,
  handler: (() => boolean | void | Promise<boolean>) | undefined
) => {
  const toast = document.createElement('ion-toast')
  toast.message = message
  toast.color = color
  toast.buttons = [
    {
      icon: close,
      handler: handler,
      text: 'Dismiss'
    }
  ]
  toast.duration = duration
  document.body.appendChild(toast)
  return toast.present()
}
