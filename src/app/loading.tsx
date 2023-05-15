import styles from "./loading.module.scss";

export default function Loading() {
  return (
    <main>
      <div className={styles.loadingContainer}>
        <div className="lds-dual-ring"></div>
      </div>
    </main>
  );
}
