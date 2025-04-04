import * as Dialog from '@radix-ui/react-dialog'
import { Content, Overlay, CloseButton } from './styles'
import { X } from 'phosphor-react'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New transaction</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="text" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
