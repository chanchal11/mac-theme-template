import "./style.css";

export default function Content() {
  return (
    <div className="content">
      <code>
        <font color="#4E9A06">
          <b>chanchal@pro</b>
        </font>
        :
        <font color="#3465A4">
          <b>~/Documents/repos/</b>
        </font>
        $ ping google.com
        <br />
        PING google.com (142.250.77.110) 56(84) bytes of data.
        <br />
        64 bytes from ck.fakeip.net (192.168.1.8): icmp_seq=1 ttl=115 time=168
        ms
        <br />
        64 bytes from ck.fakeip.net (192.168.1.8): icmp_seq=2 ttl=115 time=190
        ms
        <br />
        64 bytes from ck.fakeip.net (192.168.1.8): icmp_seq=3 ttl=115 time=74.2
        ms
        <br />
        64 bytes from ck.fakeip.net (192.168.1.8): icmp_seq=4 ttl=115 time=369
        ms
        <br />
        ^C
        <br />
        --- google.com ping statistics ---
        <br />4 packets transmitted, 4 received, 0% packet loss, time 3002ms
        <br />
        rtt min/avg/max/mdev = 74.221/200.546/369.384/106.781 ms
        <br />
        <font color="#4E9A06">
          <b>chanchal@pro</b>
        </font>
        :
        <font color="#3465A4">
          <b>~/Documents/repos/</b>
        </font>
        $
      </code>
    </div>
  );
}
