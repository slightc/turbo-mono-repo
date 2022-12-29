import styles from './index.less';
import { getVersion, up } from "@tmrd/common";

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index {getVersion()} {(window as any).NODE_CONFIG_ENV}</h1>
    </div>
  );
}
