import { ClientConfig } from "../../clientConfig";
import Image from "next/image";

const clientLogo = ClientConfig.theme.logo;

const ClientLogo = () => {
  return (
    <Image src={clientLogo} alt="client logo" width={246} height={75} />
  )
}

export default ClientLogo;