import React, { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Pagination,
  useTheme,
  alpha,
  Tooltip,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import PrismaticBackground from "../components/layout/PrismaticBackground";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  slug: string;
}

const POSTS_PER_PAGE = 6;

const Blog: React.FC = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const { t } = useTranslation();

  const posts = t("blog.featuredPosts", { returnObjects: true }) as BlogPost[];
  const categories = t("blog.categories", { returnObjects: true }) as {
    [key: string]: string;
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "all" : category);
    setPage(1);
  };

  const handleSortChange = (event: any) => {
    setSortOrder(event.target.value);
    setPage(1);
  };

  const filteredAndSortedPosts = useMemo(() => {
    let result = [...posts];

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter(
        (post) => post.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort by date
    result.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [posts, selectedCategory, sortOrder]);

  const paginatedPosts = useMemo(() => {
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    return filteredAndSortedPosts.slice(
      startIndex,
      startIndex + POSTS_PER_PAGE
    );
  }, [filteredAndSortedPosts, page]);

  const pageCount = Math.ceil(filteredAndSortedPosts.length / POSTS_PER_PAGE);

  return (
    <PrismaticBackground>
      <Box
        sx={{
          py: 16,
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h1"
              textAlign="center"
              gutterBottom
              sx={{
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(90deg, #FFFFFF 0%, #00FFA3 100%)"
                    : "linear-gradient(90deg, #1A1A1A 0%, #00805E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
              }}
            >
              {t("blog.title")}
            </Typography>
            <Typography
              variant="h5"
              textAlign="center"
              color="text.secondary"
              paragraph
              sx={{ mb: 6 }}
            >
              {t("blog.subtitle")}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "flex-start", md: "center" },
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: 3, md: 2 },
                mb: 4,
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                flexWrap="wrap"
                sx={{
                  flex: 1,
                  gap: 1,
                  mb: { xs: 2, md: 0 },
                }}
              >
                {Object.entries(categories).map(([key, value]) => (
                  <Chip
                    key={key}
                    label={value}
                    color={selectedCategory === key ? "primary" : "default"}
                    onClick={() => handleCategoryClick(key)}
                    sx={{
                      m: 0.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: 3,
                      },
                    }}
                  />
                ))}
              </Stack>

              <FormControl
                sx={{
                  minWidth: { xs: "100%", md: 200 },
                  bgcolor: alpha(theme.palette.background.paper, 0.1),
                  borderRadius: 1,
                }}
              >
                <InputLabel>{t("blog.sortBy")}</InputLabel>
                <Select
                  value={sortOrder}
                  onChange={handleSortChange}
                  label={t("blog.sortBy")}
                >
                  <MenuItem value="newest">{t("blog.newest")}</MenuItem>
                  <MenuItem value="oldest">{t("blog.oldest")}</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {filteredAndSortedPosts.length === 0 ? (
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  {t("blog.noResults")}
                </Typography>
              </Box>
            ) : (
              <AnimatePresence mode="wait">
                <Grid container spacing={4}>
                  {paginatedPosts.map((post, index) => (
                    <Grid item xs={12} sm={6} md={4} key={post.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{ height: "100%" }}
                      >
                        <Card
                          sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-8px)",
                              boxShadow:
                                theme.palette.mode === "dark"
                                  ? "0 8px 32px rgba(0, 255, 163, 0.1)"
                                  : "0 8px 32px rgba(0, 128, 94, 0.1)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              position: "relative",
                              pt: "56.25%" /* 16:9 aspect ratio */,
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={post.image}
                              alt={post.title}
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                  transform: "scale(1.05)",
                                },
                              }}
                            />
                          </Box>
                          <CardContent
                            sx={{
                              flexGrow: 1,
                              p: 3,
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                            }}
                          >
                            <Box>
                              <Chip
                                label={post.category}
                                size="small"
                                color="primary"
                                sx={{ mb: 2 }}
                              />
                              <Typography
                                variant="h5"
                                component="h2"
                                gutterBottom
                                sx={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  height: "3.6em",
                                  mb: 1,
                                }}
                              >
                                {post.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 3,
                                  WebkitBoxOrient: "vertical",
                                  height: "4.5em",
                                  mb: 2,
                                }}
                              >
                                {post.excerpt}
                              </Typography>
                            </Box>

                            <Box>
                              <Stack
                                direction="row"
                                spacing={2}
                                alignItems="center"
                                sx={{ mb: 2 }}
                              >
                                <Tooltip title={post.author}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <PersonIcon
                                      sx={{ fontSize: 16, mr: 0.5 }}
                                    />
                                    <Typography variant="caption" noWrap>
                                      {post.author}
                                    </Typography>
                                  </Box>
                                </Tooltip>
                                <Tooltip
                                  title={new Date(
                                    post.date
                                  ).toLocaleDateString()}
                                >
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <DateRangeIcon
                                      sx={{ fontSize: 16, mr: 0.5 }}
                                    />
                                    <Typography variant="caption" noWrap>
                                      {new Date(post.date).toLocaleDateString()}
                                    </Typography>
                                  </Box>
                                </Tooltip>
                                <Tooltip title={post.readTime}>
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <AccessTimeIcon
                                      sx={{ fontSize: 16, mr: 0.5 }}
                                    />
                                    <Typography variant="caption" noWrap>
                                      {post.readTime}
                                    </Typography>
                                  </Box>
                                </Tooltip>
                              </Stack>
                              <Button
                                component={RouterLink}
                                to={`/blog/${post.slug}`}
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                  transition: "all 0.3s ease",
                                  "&:hover": {
                                    transform: "translateY(-2px)",
                                  },
                                }}
                              >
                                {t("blog.readMore")}
                              </Button>
                            </Box>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </AnimatePresence>
            )}

            {pageCount > 1 && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
                <Pagination
                  count={pageCount}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  size="large"
                  sx={{
                    "& .MuiPaginationItem-root": {
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                      "&.Mui-selected": {
                        background:
                          theme.palette.mode === "dark"
                            ? "linear-gradient(135deg, #00805E 0%, #00FFA3 100%)"
                            : "linear-gradient(135deg, #006C4F 0%, #00E691 100%)",
                      },
                    },
                  }}
                />
              </Box>
            )}
          </motion.div>
        </Container>
      </Box>
    </PrismaticBackground>
  );
};

export default Blog;
