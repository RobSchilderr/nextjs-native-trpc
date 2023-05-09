import { captureException as captureExceptionNextJS } from '@sentry/nextjs'
// import { captureException as captureExceptionCapacitor } from '@sentry/capacitor'
// import { Capacitor } from '@capacitor/core'

// TODO: fix that all Errors are logged as type Error

// type Error = {
//   message: string
//   data?: any
// }

export const logError = (err: any, extra?: Record<string, any>) => {
  if (process.env.NEXT_PUBLIC_APP_STAGE === 'development') {
    console.error(err)
  }

  captureExceptionNextJS(err, extra)
}