import unittest
from atlas_nextcloud import NextcloudConfig, NextcloudAtlasClient, safe_remote_path, sha256_bytes, ATLAS_NEXTCLOUD_TREE


class TestAtlasNextcloud(unittest.TestCase):
    def test_https_required(self):
        with self.assertRaises(ValueError):
            NextcloudConfig("http://cloud.invalid", "atlas", "secret")

    def test_path_traversal_denied(self):
        with self.assertRaises(ValueError):
            safe_remote_path("/Atlas-Vivo-MILK", "../public_html")

    def test_private_tree_never_targets_webroot(self):
        for path in ATLAS_NEXTCLOUD_TREE:
            self.assertNotIn("public_html", path)
            self.assertNotIn("atlas.associacaomilk.pt", path)

    def test_receipt_sanitizes_secrets(self):
        cfg = NextcloudConfig("https://cloud.example.test", "atlas", "secret")
        c = NextcloudAtlasClient(cfg)
        receipt = c.receipt("probe", password="never", token="never", state="ok")
        self.assertNotIn("password", receipt["detail"])
        self.assertNotIn("token", receipt["detail"])
        self.assertEqual(receipt["detail"]["state"], "ok")

    def test_sha256(self):
        self.assertEqual(sha256_bytes(b"atlas"), "96f61e2684df5b0b102e999108a6f3600e0ad1f8515250055331f958710ac59a")

    def test_webdav_contract(self):
        cfg = NextcloudConfig("https://cloud.example.test", "atlas", "secret")
        c = NextcloudAtlasClient(cfg)
        url = c.webdav_url("02_IA_MILK/Source Registry/test.json")
        self.assertTrue(url.startswith("https://cloud.example.test/remote.php/dav/files/atlas/"))
        self.assertIn("02_IA_MILK", url)
        self.assertNotIn(" ", url)


if __name__ == "__main__":
    unittest.main()
