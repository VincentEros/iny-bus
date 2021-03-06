import { Context, InyPage } from '../types/index'
import { PAGE_LIFE_TIMES } from '../config'
import { onLoad, verifyEvents, onUnload } from './base'

function InyPage<T extends Context>(ctx: T): InyPage<T> {
  const { busEvents } = ctx

  if (!verifyEvents(busEvents)) {
    return ctx
  }

  onLoad(ctx, PAGE_LIFE_TIMES.onLoad)

  onUnload(ctx, PAGE_LIFE_TIMES.onUnload)

  return ctx
}

export default InyPage
