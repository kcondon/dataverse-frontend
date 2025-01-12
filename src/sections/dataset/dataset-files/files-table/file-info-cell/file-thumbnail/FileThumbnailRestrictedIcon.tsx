import { LockFill, UnlockFill } from 'react-bootstrap-icons'
import styles from './FileThumbnail.module.scss'
import { useTranslation } from 'react-i18next'
import { Tooltip } from '@iqss/dataverse-design-system'

export function FileThumbnailRestrictedIcon({ locked }: { locked: boolean }) {
  const { t } = useTranslation('files')
  const restrictedType = locked ? 'restricted' : 'restrictedWithAccess'

  return (
    <span className={styles[`restricted-icon-${restrictedType}`]}>
      <Tooltip
        overlay={`${t('table.fileAccess.title')}: ${t(
          `table.fileAccess.${restrictedType}.tooltip`
        )}`}
        placement="top">
        {locked ? (
          <LockFill role="img" title={t('table.fileAccess.restricted.icon')} />
        ) : (
          <UnlockFill role="img" title={t('table.fileAccess.restrictedWithAccess.icon')} />
        )}
      </Tooltip>
    </span>
  )
}
