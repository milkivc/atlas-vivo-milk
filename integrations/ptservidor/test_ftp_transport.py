import unittest
from ftp_transport import FTPTransportConfig, safe_remote_path


class TestPTServidorFTPTransport(unittest.TestCase):
    def test_requires_credentials(self):
        with self.assertRaises(ValueError):
            FTPTransportConfig()

    def test_rejects_public_html_root(self):
        with self.assertRaises(ValueError):
            FTPTransportConfig(username="atlas", password="secret", remote_root="/public_html")

    def test_rejects_wrong_port(self):
        with self.assertRaises(ValueError):
            FTPTransportConfig(username="atlas", password="secret", port=22)

    def test_path_traversal_denied(self):
        with self.assertRaises(ValueError):
            safe_remote_path("/atlas-private", "../public_html/index.html")

    def test_private_path(self):
        self.assertEqual(
            safe_remote_path("/atlas-private", "04_MIGRACAO/Staging/canary.zip"),
            "/atlas-private/04_MIGRACAO/Staging/canary.zip",
        )


if __name__ == "__main__":
    unittest.main()
