import React from 'react';
import styles from './GuideAnimation.module.css';

const DUMMY_USERS = [
  { id: 'plant_lover_99', name: '가든마스터 🌱' },
  { id: 'herb_whisperer', name: '허브 키우는 사람 🌿' },
  { id: 'balcony_farmer', name: '베란다 토마토 농장 🍅' },
  { id: 'succulent_love', name: '다육이 수집방 🌵' },
  { id: 'flower_power22', name: '주말엔 꽃시장 🌻' },
  { id: 'green_thumb_x', name: '초보 식집사 일상 🪴' },
  { id: 'monstera_fan', name: '몬스테라 찢잎 기록 🌱' },
  { id: 'botanical_art', name: '식물 그리는 사람 🎨' },
];

export default function GuideAnimation() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={`${styles.tab} ${styles.active}`}>
          Followers<br/><span style={{fontWeight: 400, fontSize: 12}}>128</span>
        </div>
        <div className={styles.tab}>
          Following<br/><span style={{fontWeight: 400, fontSize: 12}}>84</span>
        </div>
      </div>
      <div className={styles.viewport}>
        <div className={styles.layer}>
          <div className={styles.selectionBox}></div>
          <div className={styles.cursor}></div>
          <div className={styles.list}>
            {DUMMY_USERS.map((u, i) => (
              <div className={styles.item} key={i}>
                <div className={styles.avatar}></div>
                <div className={styles.info}>
                  <div className={styles.username}>{u.id}</div>
                  <div className={styles.desc}>{u.name}</div>
                </div>
                <div className={styles.btn}>Following</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
