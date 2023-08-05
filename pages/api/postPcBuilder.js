'use client'
export default function postPcBuilder(req, res) {
  if (req.body !== undefined || typeof window !== undefined) {
     localStorage.setItem("pcBuilder", req.body);
    res.send({ success: true });
  }
  res.send({ success: true });
}
