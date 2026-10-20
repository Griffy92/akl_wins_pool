import { useEffect, useState } from 'react';
import axios from 'axios';
import { Alert, Button } from 'antd';
import SeasonTable from '../components/SeasonTable';
import thisSeason from '../models/thisSeason';
import { addRanks, formatSeason, mergeStandings, seasonRows } from '../lib/standings';

// Built once. Wins start at 0 until the live standings arrive.
const baseRows = addRanks(seasonRows(thisSeason));

export default function ThisSeason() {
  const [rows, setRows] = useState(baseRows);
  const [status, setStatus] = useState('loading'); // 'loading' | 'ready' | 'error'
  const [missing, setMissing] = useState([]);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setStatus('loading');

    axios
      .get('/.netlify/functions/scrape', { signal: controller.signal })
      .then(({ data }) => {
        const merged = mergeStandings(baseRows, data);
        setRows(addRanks(merged.rows));
        setMissing(merged.missing);
        setStatus('ready');
      })
      .catch((err) => {
        if (axios.isCancel(err)) return;
        console.error(err);
        setStatus('error');
      });

    return () => controller.abort();
  }, [attempt]);

  return (
    <>
      <h1 className="page-title">{formatSeason(thisSeason.year)} season</h1>
      <p className="page-subtitle">Total wins across each manager’s three teams.</p>

      {status === 'error' && (
        <Alert
          className="page-alert"
          type="error"
          showIcon
          message="Couldn’t load the latest standings"
          description="Wins are showing as 0 until the standings load."
          action={<Button size="small" onClick={() => setAttempt((n) => n + 1)}>Try again</Button>}
        />
      )}
      {missing.length > 0 && (
        <Alert
          className="page-alert"
          type="warning"
          showIcon
          message={`No standings found for: ${missing.join(', ')}`}
          description="CBS may have renamed these teams. Update cbsName in src/models/teams.js."
        />
      )}

      <SeasonTable rows={rows} showRecord loading={status === 'loading'} />
    </>
  );
}
