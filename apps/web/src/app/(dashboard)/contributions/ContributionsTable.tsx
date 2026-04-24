import { PaymentForm } from './PaymentForm';

export function ContributionsTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedObligation, setSelectedObligation] = useState<any>(null);

  const fetchData = () => {
    setLoading(true);
    fetch('/api/contributions/report/analysis/member-1')
      .then(res => res.json())
      .then(json => {
        setData(json.obligations || []);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading contributions...</div>;

  return (
    <div>
      <h2>Member Contributions</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Due Date</th>
            <th>Expected</th>
            <th>Paid</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row: any) => (
            <tr key={row.id}>
              <td>{row.contributionTypeId}</td>
              <td>{row.dueDate?.slice(0, 10)}</td>
              <td>{row.expectedAmount}</td>
              <td>{row.amountPaid}</td>
              <td>{row.status}</td>
              <td>
                {row.status !== 'paid' && (
                  <button onClick={() => setSelectedObligation(row)}>Pay</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedObligation && (
        <PaymentForm
          memberId={selectedObligation.memberId}
          obligationId={selectedObligation.id}
          onSuccess={() => {
            setSelectedObligation(null);
            fetchData();
          }}
        />
      )}
    </div>
  );
}
