import { SCAN_PAGES } from '@common/constants'
import { store } from '@src/store'

import {
  genEnhancedLabels,
  convertUTC2locale,
  genExportTableDataBtn
} from '../feat-scripts'

const initTokentxnsPageScript = async (chain: string) => {
  const { enhancedLabels, utc2locale, exportTableData } = await store.get(
    'options'
  )
  if (enhancedLabels) genEnhancedLabels(chain)
  if (utc2locale) convertUTC2locale(SCAN_PAGES.TOKENTXNS.name)
  if (exportTableData) genExportTableDataBtn(chain, SCAN_PAGES.TOKENTXNS.name)
}

export default initTokentxnsPageScript
